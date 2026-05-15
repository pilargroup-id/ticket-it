import DataTable from '../../../components/table/DataTable.jsx'

export {
  DataTableChips,
  DataTableIdentity,
  DataTableStatus,
} from '../../../components/table/DataTable.jsx'

function resolveActionValue(value, row, index) {
  return typeof value === 'function' ? value(row, index) : value
}

function DataTableAction({
  columns = [],
  actions = [],
  actionColumnLabel = 'Action',
  actionColumnKey = 'action',
  actionCellClassName = 'users-table__action-cell',
  actionCellStyle = { width: '1%', whiteSpace: 'nowrap' },
  ...props
}) {
  const actionColumn =
    actions.length > 0
      ? {
          key: actionColumnKey,
          header: actionColumnLabel,
          headerClassName: 'users-table__action-header',
          cellClassName: actionCellClassName,
          cellStyle: actionCellStyle,
          render: (row, index) => (
            <div className="users-table__action-group">
              {actions.map((action) => {
                if (resolveActionValue(action.hidden, row, index)) {
                  return null
                }

                const Icon = action.icon
                const buttonLabel = action.label ?? action.key ?? 'Action'
              })}
            </div>
          ),
        }
      : null

  return (
    <DataTable
      {...props}
      columns={actionColumn ? [...columns, actionColumn] : columns}
    />
  )
}

export default DataTableAction
