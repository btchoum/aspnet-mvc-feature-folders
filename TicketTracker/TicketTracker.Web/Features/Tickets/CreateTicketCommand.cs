using FluentValidation;
using FluentValidation.Attributes;
using System;

namespace TicketTracker.Web.Features.Tickets
{
    public enum TicketType
    {
        Bug = 1,
        Support,
        Question,
        Enhancement
    }

    [Validator(typeof(CreateTicketValidator))]
    public class CreateTicketCommand
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? DueDate { get; set; }
        public TicketType TicketType { get; set; }
    }

    public class CreateTicketValidator : AbstractValidator<CreateTicketCommand>
    {
        public CreateTicketValidator()
        {
            RuleFor(dto => dto.Title).NotEmpty().WithMessage("Please provide a title");
            RuleFor(dto => dto.Description).NotEmpty().WithMessage("Please provide a description");
            RuleFor(dto => dto.DueDate).NotNull().WithMessage("Please provide a due date");
        }
    }
}