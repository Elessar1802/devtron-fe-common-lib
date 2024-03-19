import { UserRoleGroupsTableProps } from './types'
import UserRoleGroupTableRow from './UserRoleGroupTableRow'
import './userRoleGroupsTable.scss'

const getModifierClassName = (showStatus, showDelete) => {
    if (showStatus && showDelete) {
        return 'user-role-groups__table-row--with-status-and-delete'
    }
    if (showStatus) {
        return 'user-role-groups__table-row--with-status'
    }
    return 'user-role-groups__table-row--with-delete'
}

const UserRoleGroupsTable = ({
    roleGroups,
    showStatus,
    handleDelete,
    statusComponent,
    statusHeaderComponent: StatusHeaderComponent,
    handleStatusUpdate,
    disableStatusComponent = false,
}: UserRoleGroupsTableProps) => {
    const showDelete = !!handleDelete
    const modifierClassName = getModifierClassName(showStatus, showDelete)

    return (
        <div>
            <div
                className={`user-role-groups__table-header ${modifierClassName} display-grid dc__align-items-center dc__uppercase fs-12 fw-6 cn-7 lh-20 pt-6 pb-6`}
            >
                <span />
                <span>Group Name</span>
                <span>Description</span>
                {showStatus && <StatusHeaderComponent />}
                {showDelete && <span />}
            </div>
            <div className="fs-13 fw-4 lh-20 cn-9">
                {roleGroups.map((roleGroup) => (
                    <UserRoleGroupTableRow
                        {...roleGroup}
                        statusComponent={statusComponent}
                        handleStatusUpdate={handleStatusUpdate}
                        disableStatusComponent={disableStatusComponent}
                        handleDelete={handleDelete}
                        showDelete={showDelete}
                        modifierClassName={modifierClassName}
                        showStatus={showStatus}
                        key={roleGroup.id}
                    />
                ))}
            </div>
        </div>
    )
}

export default UserRoleGroupsTable
