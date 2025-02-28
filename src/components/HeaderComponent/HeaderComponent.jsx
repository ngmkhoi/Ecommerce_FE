import { Col} from 'antd';
import React from 'react';
import { WrapperHeader, WrapperTextHeader, WrapperHeaderAccount, WrapperTextHeaderSmall} from './style';
import {UserOutlined, CaretDownOutlined, ShoppingCartOutlined} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';

const HeaderComponent = () => {
  return (
    <div>
        <WrapperHeader gutter={16}>
            <Col span={6}>
                <WrapperTextHeader>
                    EcommerceShop
                </WrapperTextHeader>
            </Col>
            <Col span={12}>
                <ButtonInputSearch 
                    size="large" 
                    placeholder="Nhập từ khóa tìm kiếm" 
                    textButton="Tìm Kiếm"
                    bordered={false}
                    //onSearch={onSearch} 
                />
            </Col>
            <Col span={6} style={{display: 'flex', gap: '20px', alignItems: 'center'}}>
                <WrapperHeaderAccount>
                    <UserOutlined style={{fontSize: '30px', color:'#fff'}} />
                    <div>
                        <WrapperTextHeaderSmall> Đăng Nhập/ Đăng ký</WrapperTextHeaderSmall>
                        <div>
                            <WrapperTextHeaderSmall>Tài Khoản</WrapperTextHeaderSmall>
                            <CaretDownOutlined />
                        </div>
                    </div>
                </WrapperHeaderAccount>
                <div>
                    <ShoppingCartOutlined style={{fontSize: '30px', color:'#fff'}} />
                    <WrapperTextHeaderSmall> Giỏ hàng</WrapperTextHeaderSmall>
                </div>
            </Col>
        </WrapperHeader>
    </div>
  );
}

export default HeaderComponent;