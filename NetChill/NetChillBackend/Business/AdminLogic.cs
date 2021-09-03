using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;
using DataEntity;

namespace Business
{
    public class AdminLogic
    {
        AdminPrivilege adminPrivilege;
        public AdminLogic()
        {
            adminPrivilege = new AdminPrivilege();
        }

        public int AddMovies(MovieObject movieObject)
        {
            return adminPrivilege.AddMovies(movieObject);
        }

        public List<UserObject> GetUsers()
        {
            return adminPrivilege.GetUsers();
        }

        public bool RevokeSubscription(int id)
        {
            return adminPrivilege.RevokeSubscription(id, true);
        }
    }
}
