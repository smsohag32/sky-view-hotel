import { Button, Checkbox, Label, Select, TextInput } from "flowbite-react";
import React from "react";

const BookOnline = () => {
  return (
    <div>
      <form className="flex flex-col gap-4">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="name" value="Your Name" />
          </div>
          <TextInput
            id="name"
            type="email"
            name="name"
            placeholder="Enter Your Name"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Your email" />
          </div>
          <TextInput
            id="email1"
            type="email"
            name="email"
            placeholder="Enter Your Email"
            required={true}
          />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="number" value="Your Number" />
          </div>
          <TextInput
            id="number"
            type="number"
            name="number"
            placeholder="Enter Your Number"
            required={true}
          />
        </div>
        {/* select room type */}
        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="roomType" value="Room Type" />
          </div>
          <Select id="roomType" name="roomType" required={true}>
            <option
              className="border-b-2 text-center bg-slate-200 pb-2"
              selected
            >
              Select Room Type
            </option>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Deluxe Room</option>
          </Select>
        </div>
        <div id="select">
          <div className="mb-2 block">
            <Label htmlFor="roomType" value="Room Type" />
          </div>
          <Select id="roomType" name="roomType" required={true}>
            <option
              className="border-b-2 text-center bg-slate-200 pb-2"
              selected
            >
              Select Room Type
            </option>
            <option>Single Room</option>
            <option>Double Room</option>
            <option>Deluxe Room</option>
          </Select>
        </div>
        {/* date */}
        <div className="flex gap-4 justify-between">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="arDate" value="Arrival Date" />
            </div>
            <TextInput
              id="arDate"
              type="date"
              name="arDate"
              placeholder="Arrived Date"
              required={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="depDate" value="Departure Date" />
            </div>
            <TextInput
              id="depDate"
              type="date"
              name="depDate"
              placeholder="Departure Date"
              required={true}
            />
          </div>
        </div>

        {/* checkbox */}
        <div className="flex items-center gap-2">
          <Checkbox id="remember" name="accept" />
          <Label htmlFor="remember">Accept our term and condition</Label>
        </div>
        <Button type="submit">Book A Room Now</Button>
      </form>
    </div>
  );
};

export default BookOnline;
