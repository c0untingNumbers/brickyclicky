export interface Structure {

    getNumWorkers(): number;
    addWorkers(workers: number): boolean;
    removeWorkers(workers: number): boolean;
    getEfficiency(): number;
    getCapacity(): number;
    expand(): boolean;
}
