using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Security;
using System.Web.SessionState;
using Business;
using Shared;

namespace Presentation.Controllers
{
    public class AccountController : ApiController
    {
        [HttpPost]
        [Route("api/Account/Signup")]
        public HttpResponseMessage Signup(UserObject userObject)
        {
            UserLogic userLogic = new UserLogic();
            int value = userLogic.AddUser(userObject);
            string response;
            if (value == 0)
            {
                response = "User Already Exist";
                return Request.CreateResponse(HttpStatusCode.Ambiguous, new { value, response });
            }
            else if (0 < value)
            {
                response = "Successful";
            }
            else
            {
                response = "Invalid Credentials";
            }
            return Request.CreateResponse(HttpStatusCode.OK, new { value, response} );
        }

        [HttpPost]
        [Route("api/Account/Login")]
        public HttpResponseMessage Login(UserObject userObject)
        {
            UserLogic userLogic = new UserLogic();
            var user = userLogic.UserValidate(userObject);
            if (null != user)
            {
                MovieController movieController = new MovieController();
                movieController.userObject = user;
                var session = System.Web.HttpContext.Current.Session;
                if (null != session)
                {
                    session["FullName"] = user.FullName;
                    session["Email"] = user.Email;
                    session["IsAdmin"] = user.IsAdmin;
                    session["IsRevoked"] = user.IsRevoked;
                    session["SubscriptionDate"] = user.SubscriptionDate;
                }
                FormsAuthentication.SetAuthCookie(userObject.Email, true);
                return Request.CreateResponse(HttpStatusCode.OK, user);
            }
            return Request.CreateResponse(HttpStatusCode.NotFound, 404);
        }

        [HttpGet]
        [Route("api/Account/Loggedout")]
        public void Logout()
        {
            FormsAuthentication.SignOut();
        }
    }
}
