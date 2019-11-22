export default {
  key: 'workflow_1',
  name: '新的工作流',
  mxGraphModel: {
    root: {
      Workflow: {
        mxCell: '',
        _label: 'MyWorkflow',
        _description: '',
        _href: '',
        _id: '0'
      },
      Layer: {
        mxCell: {
          _parent: '0'
        },
        _label: 'Default Layer',
        _id: '1'
      },
      Trigger: {
        mxCell: {
          mxGeometry: {
            _x: '170',
            _y: '30',
            _width: '120',
            _height: '80',
            _as: 'geometry'
          },
          _style: 'myStyle;image=images/events/trigger.png',
          _parent: '1',
          _label: '触发器',
          _vertex: '1'
        },
        _label: '触发器',
        _id: 'Trigger'
      },
      Task: [
        {
          mxCell: {
            mxGeometry: {
              _x: '90',
              _y: '190',
              _width: '120',
              _height: '80',
              _as: 'geometry'
            },
            _style: 'myStyle;image=/images/events/set.png',
            _parent: '1',
            _vertex: '1'
          },
          _label: '赋值',
          _eventType: 'set',
          _convertType: 'null',
          _id: '2'
        },
        {
          mxCell: {
            mxGeometry: {
              _x: '330',
              _y: '190',
              _width: '120',
              _height: '80',
              _as: 'geometry'
            },
            _style: 'myStyle;image=/images/events/set.png',
            _parent: '1',
            _vertex: '1'
          },
          _label: '赋值',
          _eventType: 'set',
          _convertType: 'null',
          _id: '3'
        },
        {
          mxCell: {
            mxGeometry: {
              _x: '560',
              _y: '320',
              _width: '120',
              _height: '80',
              _as: 'geometry'
            },
            _style: 'myStyle;image=/images/events/set.png',
            _parent: '1',
            _vertex: '1'
          },
          _label: '赋值',
          _eventType: 'set',
          _convertType: 'null',
          _id: '13'
        }
      ],
      Edge: [
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: 'Trigger',
            _target: '2',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '4'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: 'Trigger',
            _target: '3',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '5'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0;exitY=0.5;exitDx=0;exitDy=0;',
            _parent: '1',
            _source: '3',
            _target: '2',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '6'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: '2',
            _target: '7',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '8'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=1;entryY=0.5;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: '7',
            _target: '2',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '9'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=0;exitDx=0;exitDy=0;entryX=0.5;entryY=1;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: '7',
            _target: '3',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '10'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0;entryY=0.5;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: '3',
            _target: '13',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '14'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=0.5;exitY=1;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: '11',
            _target: '13',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '16'
        },
        {
          mxCell: {
            mxGeometry: {
              _relative: '1',
              _as: 'geometry'
            },
            _style: 'exitX=1;exitY=0.5;exitDx=0;exitDy=0;entryX=0.5;entryY=0;entryDx=0;entryDy=0;',
            _parent: '1',
            _source: 'Trigger',
            _target: '11',
            _edge: '1'
          },
          _label: '',
          _description: '',
          _id: '17'
        }
      ],
      Branch: [
        {
          mxCell: {
            mxGeometry: {
              _x: '230',
              _y: '330',
              _width: '120',
              _height: '80',
              _as: 'geometry'
            },
            _style: 'myStyle;image=/images/events/branch.png',
            _parent: '1',
            _vertex: '1'
          },
          _label: '分支',
          _eventType: 'branch',
          _convertType: 'null',
          _id: '7'
        },
        {
          mxCell: {
            mxGeometry: {
              _x: '450',
              _y: '130',
              _width: '120',
              _height: '80',
              _as: 'geometry'
            },
            _style: 'myStyle;image=/images/events/branch.png',
            _parent: '1',
            _vertex: '1'
          },
          _label: '分支',
          _eventType: 'branch',
          _convertType: 'null',
          _id: '11'
        }
      ]
    }
  }
}