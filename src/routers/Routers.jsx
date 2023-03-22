import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CacKhoaHoc from '../pages/CacKhoaHoc';
import ChinhSach from '../pages/ChinhSach';
import DuHocPhap from '../pages/DuHocPhap';
import GioiThieu from '../pages/GioiThieu';
import Home from '../pages/Home';
import KhoaHoc from '../pages/KhoaHoc';

const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={'/home'} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/du-hoc-phap" element={<DuHocPhap />} />
      <Route path="/cac-khoa-hoc" element={<CacKhoaHoc />} />
      <Route path="/gioi-thieu" element={<GioiThieu />} />
      <Route path="/chinh-sach-bao-mat" element={<ChinhSach />} />
      <Route path="/cac-khoa-hoc/:slug" element={<KhoaHoc />} />
    </Routes>
  );
};

export default Routers;
