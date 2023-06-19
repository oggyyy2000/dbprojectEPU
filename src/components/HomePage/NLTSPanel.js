import React, { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

const NLTSPanel = () => {
  const importAll = (r) => {
    return r.keys().map(r);
  };
  const listOfImages = importAll(
    require.context(`../../assets/tables/`, false, /\.(png|jpe?g|svg)$/i)
  );
  listOfImages.map((image, index) =>
    console.log(image.slice(14).split(".")[0])
  );
  return (
    <div className="w-2/4 h-[90.7vh] border border-solid border-black text-center overflow-y-auto">
      <div className="text-2xl font-bold">NLTSpanel</div>

      <div className="mt-4">
        <FormControl
          variant={"outlined"}
          className="self-center min-w-[43%] w-[43%] ml-4"
        >
          <InputLabel>Chọn Danh Mục Bảng</InputLabel>
          <Select
            width="100%"
            className="h-10"
            label={"Chọn Danh Mục Bảng"}
            // value={Tuyen}
            // onChange={onChangeSelectTuyen}
            displayEmpty
          >
            <MenuItem value={""}>Trống</MenuItem>
            <MenuItem value={""}>Chung</MenuItem>
            <MenuItem value={"THUY_SAN"}>Thủy Sản</MenuItem>
            <MenuItem value={"TRONG_TROT"}>Trồng Trọt</MenuItem>
            <MenuItem value={"CHAN_NUOI"}>Chăn Nuôi</MenuItem>
          </Select>
        </FormControl>
      </div>

      <div className="mt-4">
        {listOfImages.map((image, index) => (
          <>
            <div className="text-base">{image.slice(14).split(".")[0]}</div>
            <div className="mb-4 text-center inline-block">
              <img key={index} src={image} alt="info" />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default NLTSPanel;
