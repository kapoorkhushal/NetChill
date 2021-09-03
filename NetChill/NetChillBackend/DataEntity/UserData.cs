using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;

namespace DataEntity
{
    public class UserData
    {
        public int AddUser(UserObject userObject)
        {
            User user = new User()
            {
                Email = userObject.Email.ToLower(),
                Password = userObject.Password,
                FullName = userObject.FullName,
                isAdmin = false,
                SubscriptionDate = DateTime.Now,
                IsRevoked = false
            };

            NetChillEntities netChillEntities = new NetChillEntities();
            netChillEntities.User.Add(user);
            int value = netChillEntities.SaveChanges();
            return value;
        }

        public UserObject UserValidate(UserObject userObject)
        {
            bool isValid;
            NetChillEntities netChillEntities = new NetChillEntities();
            UserObject user = null;
            using (netChillEntities)
            {
                isValid = netChillEntities.User.
                    Any(x => x.Email == userObject.Email && x.Password == userObject.Password);
                if (isValid)
                {
                    user = netChillEntities.User.
                        Where(x => x.Email == userObject.Email && x.Password == userObject.Password)
                        .Select(
                        x => new UserObject()
                        {
                            Id = x.Id,
                            FullName = x.FullName,
                            Email = x.Email,
                            IsAdmin = x.isAdmin,
                            SubscriptionDate = x.SubscriptionDate,
                            IsRevoked = x.IsRevoked
                        }).FirstOrDefault();

                    var tempUser = netChillEntities.User.FirstOrDefault(x => x.Email == userObject.Email);
                    tempUser.IsRevoked = false;
                    netChillEntities.SaveChanges();
                }
                return user;
            }
        }

        public bool IfUserExist(string email)
        {
            bool isValid;
            NetChillEntities netChillEntities = new NetChillEntities();
            using (netChillEntities)
            {
                isValid = netChillEntities.User.Any(x => x.Email == email);
                return isValid;
            }
        }
    }
}
