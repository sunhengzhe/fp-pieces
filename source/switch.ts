type CaseWrap<K> = { key: K, handle: (...argv: any[]) => any }

export function _case<K>(
  key: CaseWrap<K>['key'],
  handle: CaseWrap<K>['handle']
): CaseWrap<K> {
  return {
    key,
    handle
  }
}

export function _switch<K>(_if: (...argv: any[]) => K, ..._cases: CaseWrap<K>[]) {
  return function (_default?: CaseWrap<K>['handle']) {
    return function (...target: Parameters<typeof _if>) {
      const _key = _if(...target)
      const _case = _cases.find(f => f.key === _key)

      if (_case) {
        return _case.handle(...target)
      } else if (_default) {
        return _default(...target)
      } else {
        throw new Error('No sure what to do with this option')
      }
    }
  }
}