export interface Structure {
    getNumWorkers(): number;
    addWorkers(num: number): boolean;
    removeWorkers(num: number): boolean;
    getEfficiency(): number;
    getCapacity(): number;
    expand(amount: number): boolean;
}