export abstract class Adapter<T, E> {
    abstract adapt(origin: T): E;
}
