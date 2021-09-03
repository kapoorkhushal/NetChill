using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;
using DataEntity;

namespace Business
{
    public class MovieLogic
    {
        GetMovie getMovie;
        public MovieLogic()
        {
            getMovie = new GetMovie();
        }

        public List<MovieObject> GetFeaturedMovies()
        {
            return getMovie.GetFeaturedMovies(true);
        }

        public List<MovieObject> GetNewReleasedMovies()
        {
            return getMovie.GetNewReleasedMovies(DateTime.Now);
        }

        public List<MovieObject> GetUpcomingMovies()
        {
            return getMovie.GetUpcomingMovies(DateTime.Now);
        }

        public MovieObject GetDetails(int id)
        {
            return getMovie.GetDetails(id);
        }

        public List<MovieObject> GetAllMovies()
        {
            return getMovie.GetAllMovies();
        }
    }
}
