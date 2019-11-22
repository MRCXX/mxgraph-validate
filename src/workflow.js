// 工作流
import _ from 'lodash'

const prefix = 'mxGraphModel.root'

class Parser {
  constructor (data) {
    this.data = data
  }

  // 获取触发器的id
  getTriggerEvent () {
    return 'Trigger' // 固定
  }

  // 同一个source的归为一类
  groupEdgeBySource () {
    let edge = _.get(this.data, `${prefix}.Edge`)
    edge = _.isArray(edge) ? edge : [edge] // 当只有一个的时候, 会返回一个对象, 要转成数组
    return _.groupBy(edge, item => {
      return _.get(item, 'mxCell._source')
    })
  }

  // 根据id返回事件类型
  // Branch: 分支
  // task: 行为
  getType (id) {
    if (id === 'Trigger') return id
    const arr = ['Branch', 'Task']
    for (const index in arr) {
      if (this.returnObjectDIct(arr[index])[id]) return arr[index]
    }
  }

  // 数组转成对象, 用id作为key
  returnObjectDIct (key, keyName = '_id') {
    if (!key) return {}
    let val = _.get(this.data, `${prefix}.${key}`)
    if (!val) return {} // 存在没有分支的情况, 那就直接返回空对象
    if (!_.isArray(val)) val = [val] // 当只有一个的时候, 会返回一个对象, 要转成数组
    return _.mapKeys(val, item => {
      return item[keyName]
    })
  }

  getPropFromMxCellObj (key) {
    return _.get(this.data, `mxCell.${key}`)
  }

  // new add
  checkEdge () {
    const errorArr = []
    const edgeObj = this.groupEdgeBySource()
    console.log(edgeObj)
    for (const sourceId in edgeObj) {
      const arr = edgeObj[sourceId]
      if (this.getType(sourceId) === 'Task' && arr.length > 1) {
        errorArr.push(this.makeErr('TaskError', `Task(${sourceId})只能有一个子节点`))
      }
      if (this.getType(sourceId) === 'Branch' && arr.length > 2) {
        errorArr.push(this.makeErr('BranchError', `Branch(${sourceId})有且仅有两个子节点`))
      }
      if (sourceId === 'Trigger') {
        if (arr.length > 1) {
          errorArr.push(this.makeErr('TriggerError', '触发器只能有一个子节点'))
        }
        if (arr.length === 0) {
          errorArr.push(this.makeErr('TriggerError', '工作流不能为空'))
        }
      }
    }
    console.log(errorArr)
    return errorArr
  }

  makeErr (type, message) {
    return {
      tags: [type],
      message
    }
  }
}

export default Parser
