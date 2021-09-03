using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;
using DataEntity;

namespace Business
{
    public class ListLogic
    {
        UserPrivilege userPrivilege;
        public ListLogic()
        {
            userPrivilege = new UserPrivilege();
        }

        public bool AddToList(int usid, int id)
        {
            return userPrivilege.AddToList(usid, id);
        }

        public List<MovieObject> MyMovies(int id)
        {
            return userPrivilege.MyMovies(id);
        }
    }
}
