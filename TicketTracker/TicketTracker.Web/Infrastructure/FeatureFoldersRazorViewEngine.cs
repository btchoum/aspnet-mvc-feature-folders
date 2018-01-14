using System.Collections.Generic;
using System.Web.Mvc;

namespace TicketTracker.Web.Infrastructure
{
    public class FeatureFoldersRazorViewEngine : RazorViewEngine
    {
        public FeatureFoldersRazorViewEngine()
        {
            var features = new string[] { "Tickets" };
            var formats = new List<string>
            {
                "~/Features/{1}/{0}.cshtml",
                "~/Features/SharedViews/{0}.cshtml"
            };

            foreach (var feat in features)
            {
                formats.Add(string.Format("~/Features/{0}/{{1}}/{{0}}.cshtml", feat));
            }

            var featureFolderViewLocationFormats = formats.ToArray();

            ViewLocationFormats = featureFolderViewLocationFormats;
            MasterLocationFormats = featureFolderViewLocationFormats;
            PartialViewLocationFormats = featureFolderViewLocationFormats;
        }
    }
}