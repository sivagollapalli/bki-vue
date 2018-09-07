<template>
  <div>
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
import { mapState, mapActions } from 'vuex'

export default {
  name: 'UserList',
  data() {
    return {
        columns: [
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
    }; 
  },

  computed: mapState([
    'rows',
    'totalRecords',
    'serverParams'
  ]),

  methods: {
    ...mapActions([
      'fetchUsers'
    ]),

    fetchUser: function() {
      this.fetchUsers()
    },

    updateParams(newProps) {
      this.serverParams = Object.assign({}, this.serverParams, newProps);
    },
    
    onPageChange(params) {
      this.updateParams({page: params.currentPage});
      this.fetchUser()
    },

    onPerPageChange(params) {
      this.updateParams({perPage: params.currentPerPage});
      this.fetchUser()
    },

    onSortChange(params) {
      this.updateParams({
        sort: {
          type: params.sortType,
          field: this.columns[params.columnIndex].field,
        },
      });
      this.fetchUser()
    },
    
    onColumnFilter(params) {
      this.updateParams(params);
      this.fetchUser()
    },
},

mounted() {
    this.fetchUser()
}

}  
</script>