using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;

namespace DataEntity
{
    public class AdminPrivilege
    {
        NetChillEntities netChillEntities;
        public AdminPrivilege()
        {
            netChillEntities = new NetChillEntities();
        }
        public int AddMovies(MovieObject movieObject)
        {
            Movie movie = new Movie()
            {
                Name = movieObject.Name,
                Category = movieObject.Category,
                YearOfRelease = movieObject.YearOfRelease,
                Availability = movieObject.Availability,
                Description = movieObject.Description,
                IsFeatured = movieObject.IsFeatured,
                PosterURL = movieObject.PosterURL,
                ContentURL = movieObject.ContentURL
            };
            netChillEntities.Movie.Add(movie);
            int value = netChillEntities.SaveChanges();
            return value;
        }

        public List<UserObject> GetUsers()
        {
            using (netChillEntities)
            {
                var result = netChillEntities.User.
                    Select(x => new UserObject()
                    {
                        Id = x.Id,
                        Email = x.Email,
                        FullName = x.FullName,
                        SubscriptionDate = x.SubscriptionDate
                    }).ToList();
                return result;
            }
        }

        public bool RevokeSubscription(int id, bool revoked)
        {
            using (netChillEntities)
            {
                var user = netChillEntities.User.FirstOrDefault(x => x.Id == id);
                DateTime date = user.SubscriptionDate;
                if(null != user)
                {
                    user.SubscriptionDate = date.AddMonths(6);
                    user.IsRevoked = revoked;
                }
                netChillEntities.SaveChanges();
            }
            return revoked;
        }
    }
}
