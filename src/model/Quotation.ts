export class Quotation {
    describe: string;

}

export class QuotationClass extends Quotation {
    quotationList: Array<Quotation> = [];

    addQuotation(name: string) {
        this.quotationList.push({describe: name});
    }
}
