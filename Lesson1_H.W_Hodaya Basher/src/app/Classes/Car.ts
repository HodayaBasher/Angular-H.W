export class Car{
    constructor(
        public CarID: string,
        public CompanyName: string,
        public ManufacturedYear: Number,
        public PassedTestInLastYear: boolean
    ){}
     //get functions
     getCarId():string{
        return this.CarID
    }
    getCompanyName():string{
        return this.CompanyName
    }
    getManufacturedYear():Number{
        return this.ManufacturedYear
    }
    getPassedTestInLastYear():boolean{
        return this.PassedTestInLastYear
    }


    //set functions
    setCarID(CarID:string):void{
        this.CarID=CarID
    }
    setCompanyName(CompanyName:string):void{
        this.CompanyName=CompanyName
    }
    setManufacturedYear(ManufacturedYear:number):void{
        this.ManufacturedYear=ManufacturedYear
    }
    setPassedTestInLastYear(PassedTestInLastYear:boolean):void{
        this.PassedTestInLastYear=PassedTestInLastYear
    }

}

