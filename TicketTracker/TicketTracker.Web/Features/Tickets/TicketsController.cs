using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace TicketTracker.Web.Features.Tickets
{
    public class TicketsController : Controller
    {
        public ActionResult Create()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Create(CreateTicketCommand command)
        {
            if (!ModelState.IsValid)
            {
                return View(command);
            }
            // TODO: send ticket to database
            // TODO: add success message 
            // redirect to main page on success
            return Redirect(Url.Content("~/"));
        }
    }
}