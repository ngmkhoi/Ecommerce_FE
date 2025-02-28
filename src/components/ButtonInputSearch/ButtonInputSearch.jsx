import { Input, Button } from "antd";
import React from "react";
import { SearchOutlined } from "@ant-design/icons";

const ButtonInputSearch = (props) => {
    const {size, placeholder, textButton, variant = 'borderless', bordered, backgroundColorInput = '#fff', backgroundColorButton = 'rgb(13,92,182)', colorButton = '#ff'} = props;
    return(
      <div style={{display: 'flex'}}>
          <Input 
          size={size}
          placeholder={placeholder}
          variant={variant}
          style={{backgroundColor: backgroundColorInput}}
          />
          <Button 
          size={size} 
          icon={<SearchOutlined style={{color:colorButton}}/>}
          bordered={bordered}
          style={{background: backgroundColorButton, border: !bordered && 'none'}}
          ><span style={{ color : colorButton }}>{textButton}</span></Button>
      </div>
    );
}

export default ButtonInputSearch;