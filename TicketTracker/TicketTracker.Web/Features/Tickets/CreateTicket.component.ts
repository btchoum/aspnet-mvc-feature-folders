export class CreateTicketComponent {
    constructor() {
        console.log('CreateTicketComponent')
    }

    initialize() {
        console.log('Initializing CreateTicketComponent');
        $('#DueDate').datepicker();
    }
}

const app = new CreateTicketComponent();
console.log(app);
app.initialize();
