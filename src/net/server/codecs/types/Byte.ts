import TypeCodec from "../TypeCodec";

const Byte: TypeCodec<number> = {
  serialise(value) {
    if (value > 127 || value < -128) throw new Error("A Byte may only be an integer between -128 and 127!");
    const buff = Buffer.alloc(2);
    buff.writeInt16BE(value);
    return buff;
  },

  deserialise(consumer) {
    const bytes = consumer.consume(2);
    return bytes.readInt16BE();
  },
};

export default Byte;
