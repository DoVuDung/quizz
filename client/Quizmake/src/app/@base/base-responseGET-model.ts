import { Deserializable } from "./deserializable.model";
import { BaseModel } from "./base-model";

export class BaseResponseGET implements Deserializable {
  public Payload;
  deserialize<T extends BaseModel>(input: any): this {
    let modelType: { new(): T; };
    Object.assign(this, input);
    this.Payload = input.Payload.map(arrayItem => new modelType().deserialize(arrayItem));
    return this;
  }
}