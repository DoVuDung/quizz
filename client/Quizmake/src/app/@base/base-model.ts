import { Deserializable } from "./deserializable.model";

export class BaseModel implements Deserializable {
    deserialize(input: any): this {
        return Object.assign(this, input);
    }
}