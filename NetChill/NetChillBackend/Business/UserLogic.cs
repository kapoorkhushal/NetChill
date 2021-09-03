using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;
using DataEntity;

namespace Business
{
    public class UserLogic
    {
        UserData userData;
        public UserLogic()
        {
            userData = new UserData();
        }

        public int AddUser(UserObject userObject)
        {
            if (userData.IfUserExist(userObject.Email))
            {
                return 0;
            }
            int value = userData.AddUser(userObject);
            return value;
        }

        public UserObject UserValidate(UserObject userObject)
        {
            UserObject user = userData.UserValidate(userObject);
            return user;
        }
    }
}
