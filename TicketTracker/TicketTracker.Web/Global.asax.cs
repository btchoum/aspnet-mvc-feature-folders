﻿using FluentValidation.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using TicketTracker.Web.Infrastructure;

namespace TicketTracker.Web
{
    public class MvcApplication : System.Web.HttpApplication
    {
        protected void Application_Start()
        {
            AreaRegistration.RegisterAllAreas();
            GlobalConfiguration.Configure(WebApiConfig.Register);
            FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
            RouteConfig.RegisterRoutes(RouteTable.Routes);
            BundleConfig.RegisterBundles(BundleTable.Bundles);

            // Configure Fluent Validation into MVC pipeline
            FluentValidationModelValidatorProvider.Configure();

            // Apply Feature folders view location
            ViewEngines.Engines.Clear();
            ViewEngines.Engines.Add(new FeatureFoldersRazorViewEngine());
        }
    }
}
