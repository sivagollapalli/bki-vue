<template>
  <div>
    <div class="col-md-12">
      <router-link to="/users/new">Create User</router-link>
    </div>
    <vue-good-table
        mode="remote"
        @on-page-change="onPageChange"
        @on-sort-change="onSortChange"
        @on-column-filter="onColumnFilter"
        @on-per-page-change="onPerPageChange"
        :totalRows="totalRecords"
        :rows="rows"
        :columns="columns"/>
  </div>
</template>

<script>
export default {
  name: 'UserList',
  data() {
    return {
        columns: [
        {
          label: 'ID',
          field: 'id',
        },
        {
          label: 'First Name',
          field: 'first_name',
        },
        {
          label: 'Last Name',
          field: 'last_name',
        },
        {
          label: 'Email',
          field: 'email',
        },
        {
          label: 'Phone',
          field: 'mobile',
        },
        
        ],
        rows: [],
        totalRecords: 0,
        serverParams: { page: 1,  perPage: 10 }
    }; 
  },

  methods: {
    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.loadItems();
    },

    onPerPageChange(params) {
      this.updateParams({perPage: params.currentPerPage});
      this.loadItems();
    },

    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        },
      });
      this.loadItems();
    },
    
    onColumnFilter(params) {
      this.updateParams(params);
      this.loadItems();
    },

    // load items is what brings back the rows from server
    loadItems() {
     this.$http.get('/users', { 
       params: this.serverParams
       }).then(response => {
         console.log(response.data.totalRecords);
         this.totalRecords = response.data.totalRecords;
         this.rows = response.data.rows;
      });
    }
},

mounted() {
    this.loadItems();
}

}  
</script>