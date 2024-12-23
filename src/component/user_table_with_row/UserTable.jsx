import GridTable from "../grid_table_with_row/GridTable";
import loadUserData from "../user_table_with_row/api/UserTableService";
import UserRow from "./child_component/UserRow";
import Pagination from "../pagination_component/Pagination";
import SearchPanel from "../search_filter/searchPanel";
import NewUserModal from "../modal/modal";
export default function UserTableWithRow() {
    return (
        <GridTable RowComponent={UserRow}
            loadItemApi={loadUserData}
            Pagination={Pagination}
            NewItemModal={NewUserModal}
            SearchPanel={SearchPanel}

        />
    );
}
