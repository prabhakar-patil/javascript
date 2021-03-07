#include <nan.h>

const int maxValue = 10;
int numberOfCalls = 0;

NAN_METHOD(WhoAmI) {
  auto message = Nan::New<v8::String>("I'm a Node Hero!").ToLocalChecked();
  info.GetReturnValue().Set(message);
}

NAN_METHOD(Increment) {

  if (!info[0]->IsNumber()) {
    Nan::ThrowError("Argument must be a number");
    return;
  }

  // double argsValue = 4;
  double argsValue = info[0]->NumberValue();
  if (numberOfCalls + argsValue > maxValue) {
    Nan::ThrowError("Counter went through the roof!");
    return;
  }

  numberOfCalls += argsValue;

  auto currentNumberOfCalls = Nan::New<v8::Number>(numberOfCalls);

  info.GetReturnValue().Set(currentNumberOfCalls);
}

NAN_MODULE_INIT(Initialize) {
  target->Set(Nan::New("whoami").ToLocalChecked(),
              Nan::New<v8::FunctionTemplate>(WhoAmI)->GetFunction());

  target->Set(Nan::New("increment").ToLocalChecked(),
              Nan::New<v8::FunctionTemplate>(Increment)->GetFunction());
  // NAN_EXPORT(target, WhoAmI);
  // NAN_EXPORT(target, Increment);
}

NODE_MODULE(addon, Initialize)
