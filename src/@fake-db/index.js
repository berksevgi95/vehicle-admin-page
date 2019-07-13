export const Status = {
    FINISHED : 'Finished',
    DISPATCHED : 'Dispatched'
}

export const VehicleStatus = {
    ACTIVE : 'Active',
    PENDING : 'Pending',
    INACTIVE : 'Inactive'
}

export const Vehicles = [{
    id : 1,
    name : 'a',
    status : VehicleStatus[0],
    coord : {
        lat : 51.5096506001197,
        lng : -0.16136169433593753
    }
},
{
    id : 2,
    name : 'b',
    status : VehicleStatus[1],
    coord : {
        lat : 51.52001281320712,
        lng : -0.09149551391601562
    }
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