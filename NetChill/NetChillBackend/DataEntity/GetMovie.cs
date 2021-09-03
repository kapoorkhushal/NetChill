using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Shared;

namespace DataEntity
{
    public class GetMovie
    {
        NetChillEntities netChillEntities;
        public GetMovie()
        {
            netChillEntities = new NetChillEntities();
        }

        public List<MovieObject> GetFeaturedMovies(bool IsFeatured)
        {
            using (netChillEntities)
            {
                var result = from movies in netChillEntities.Movie
                             where movies.IsFeatured == IsFeatured
                             select movies;
                return QueryConvertor(result);
            }
        }

        public List<MovieObject> GetNewReleasedMovies(DateTime date)
        {
            DateTime previousDate = date.AddDays(-30);
            using (netChillEntities)
            {
                var result = from movies in netChillEntities.Movie
                             where movies.Availability < date && movies.Availability > previousDate
                             select movies;
                return QueryConvertor(result);
            }
        }

        public List<MovieObject> GetUpcomingMovies(DateTime date)
        {
            using (netChillEntities)
            {
                var result = from movies in netChillEntities.Movie
                             where movies.YearOfRelease > date
                             select movies;
                return QueryConvertor(result);
            }
        }

        public MovieObject GetDetails(int id)
        {
            using (netChillEntities)
            {
                var result = netChillEntities.Movie.
                    Where(x => x.Id == id).
                    Select(x => new MovieObject()
                    {
                        Id = x.Id,
                        Name = x.Name,
                        Category = x.Category,
                        Description = x.Description,
                        YearOfRelease = x.YearOfRelease,
                        PosterURL = x.PosterURL,
                        ContentURL = x.ContentURL
                    }).FirstOrDefault();
                return result;
            }
        }

        public List<MovieObject> GetAllMovies()
        {
            using (netChillEntities)
            {
                var result = from movies in netChillEntities.Movie
                             select movies;
                return QueryConvertor(result);
            }
        }

        public List<MovieObject> QueryConvertor(IQueryable<Movie> movies)
        {
            List<MovieObject> movieObjects = new List<MovieObject>();
            var moviesList = movies.ToList();
            foreach(var movie in moviesList)
            {
                movieObjects.Add(new MovieObject()
                {
                    Id = movie.Id,
                    Name = movie.Name,
                    Category = movie.Category,
                    //DateTime.Parse(movie.YearOfRelease.Year.ToString())
                    YearOfRelease = new DateTime(movie.YearOfRelease.Year,01,01),
                    Description = movie.Description,
                    PosterURL = movie.PosterURL,
                    ContentURL = movie.ContentURL
                });
            }
            return movieObjects;
        }
    }
}
