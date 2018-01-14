export class CreateTicketComponent {
    constructor() {
        console.log('CreateTicketComponent')
    }

    initialize() {
        console.log('Initializing CreateTicketComponent');
    }
}

const app = new CreateTicketComponent();
console.log(app);