using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;
using Business;
using Shared;

namespace Presentation.Controllers
{
    public class MovieController : ApiController
    {
        public UserObject userObject;

        [HttpGet]
        [Route("api/Movie/GetFeaturedMovies")]
        public HttpResponseMessage GetFeaturedMovies()
        {
            var result = new MovieLogic().GetFeaturedMovies();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/GetNewReleasedMovies")]
        public HttpResponseMessage GetNewReleasedMovies()
        {
            var result = new MovieLogic().GetNewReleasedMovies();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/GetUpcomingMovies")]
        public HttpResponseMessage GetUpcomingMovies()
        {
            var result = new MovieLogic().GetUpcomingMovies();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/GetMovie/id")]
        public HttpResponseMessage GetDetails(int id)
        {
            var result = new MovieLogic().GetDetails(id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/GetAllMovies")]
        public HttpResponseMessage GetAllMovies()
        {
            var result = new MovieLogic().GetAllMovies();
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/GetAllUsers")]
        
        public HttpResponseMessage GetAllUsers()
        {
            var users = new AdminLogic().GetUsers();
            return Request.CreateResponse(HttpStatusCode.OK, users);
        }

        [HttpPost]
        [Route("api/Movie/AddMovie")]
        public HttpResponseMessage AddMovie([FromBody]MovieObject movieObject)
        {
            var session = System.Web.HttpContext.Current.Session;
            if (null != session)
            {
                UserObject userObject = new UserObject()
                {
                    Email = session["Email"].ToString(),
                    IsAdmin = (bool)session["IsAdmin"]
                };
            }
            AdminLogic adminLogic = new AdminLogic();
            int val = adminLogic.AddMovies(movieObject);
            string response;
            if (0 < val)
            {
                response = "Successful";
            }
            else
            {
                response =  "Error in adding Movie";
            }
            return Request.CreateResponse(HttpStatusCode.OK, new { val, response });
        }

        [HttpGet]
        [Route("api/Movie/RevokeSubscription/id")]
        public HttpResponseMessage RevokeSubscription(int id)
        {
            var result = new AdminLogic().RevokeSubscription(id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/MyMovies/id")]
        public HttpResponseMessage MyMovies(int id)
        {
            var result = new ListLogic().MyMovies(id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [HttpGet]
        [Route("api/Movie/AddToList/id/usid")]
        public HttpResponseMessage AddToList(int usid, int id)
        {
            var result = new ListLogic().AddToList(usid, id);
            return Request.CreateResponse(HttpStatusCode.OK, result);
        }

        [Route("api/Movie/AddPoster")]
        public HttpResponseMessage AddPoster()
        {
            var httpRequest = HttpContext.Current.Request;
            var posterFile = httpRequest.Files[0];
            string posterFileName = posterFile.FileName;
            var posterPath = HttpContext.Current.Server.MapPath("~/Photos/" + posterFileName);
            posterFile.SaveAs(posterPath);
            return Request.CreateResponse(HttpStatusCode.OK, posterFileName);
        }

        [Route("api/Movie/AddContent")]
        public HttpResponseMessage AddContent()
        {
            var httpRequest = HttpContext.Current.Request;
            var movieFile = httpRequest.Files[0];
            string movieFileName = movieFile.FileName;
            var moviePath = HttpContext.Current.Server.MapPath("~/Movies/" + movieFileName);
            movieFile.SaveAs(moviePath);
            return Request.CreateResponse(HttpStatusCode.OK, movieFileName);
        }
    }
}
