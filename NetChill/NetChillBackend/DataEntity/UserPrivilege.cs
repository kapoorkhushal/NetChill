using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;

namespace DataEntity
{
    public class UserPrivilege
    {
        NetChillEntities netChillEntities;
        public UserPrivilege()
        {
            netChillEntities = new NetChillEntities();
        }

        public bool AddToList(int usid, int movieId)
        {
            using (netChillEntities)
            {
                bool verify = netChillEntities.MovieMapping.Any(x => x.UserId == usid && x.MovieId == movieId);
                if (!verify)
                {
                    MovieMapping movieMapping = new MovieMapping()
                    {
                        UserId = usid,
                        MovieId = movieId
                    };
                    netChillEntities.MovieMapping.Add(movieMapping);
                    netChillEntities.SaveChanges();
                }
                return !verify;
            }
        }

        public List<MovieObject> MyMovies(int id)
        {
            using (netChillEntities)
            {
                var movies = from MovieMapped in netChillEntities.MovieMapping
                             join movie in netChillEntities.Movie on MovieMapped.MovieId equals movie.Id
                             where MovieMapped.UserId == id
                             select movie;

                List<MovieObject> movieObjects;
                GetMovie getMovie = new GetMovie();
                movieObjects = getMovie.QueryConvertor(movies);
                return movieObjects;
            }
        }
    }
}
