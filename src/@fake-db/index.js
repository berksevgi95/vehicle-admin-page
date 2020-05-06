export const Status = {
    FINISHED : 'Finished',
    DISPATCHED : 'Dispatched'
}


export const Vehicles = [{
    id: 1,
    brand: 'Ford',
    modelName: 'Focus',
    year: 2010,
    km: 410000
},{
    id: 2,
    brand: 'Peugeot',
    modelName: '308',
    year: 2011,
    km: 32000
},{
    id: 3,
    brand: 'Kia',
    modelName: 'Ceed',
    year: 2009,
    km: 9910
},{
    id: 4,
    brand: 'Kia',
    modelName: 'Ceed',
    year: 2009,
    km: 9910
},{
    id: 5,
    brand: 'BMW',
    modelName: '320d',
    year: 2020,
    km: 900
}]

export const Drivers = [{
    id : 1,
    name : 'berk'
}]

export const Routes = [{
    id : 1,
    name: 'vardiya 1',
    vehicle : Vehicles[0],
    date : '2019-07-10',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.5206787641320712,
        lng : -0.091345123141562
    },
    arrLoc : {
        lat : 51.523423631320712,
        lng : -0.093894753141562
    }
},
{
    id : 2,
    name: 'vardiya 2',
    vehicle : Vehicles[1],
    date : '2019-07-02',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.5206787641320712,
        lng : -0.031345123141562
    },
    arrLoc : {
        lat : 51.433423631320712,
        lng : -0.073894753141562
    }
},
{
    id : 3,
    name: 'vardiya 3',
    vehicle : Vehicles[0],
    date : '2019-04-10',
    time : '13.12',
    driver : Drivers[0],
    helper : null,
    performance : '13/13',
    status : Status.DISPATCHED,
    deptLoc : {
        lat : 51.6706787641320712,
        lng : -0.091345123141562
    },
    arrLoc : {
        lat : 51.523423631320712,
        lng : -0.053894753141562
    }
}]