import { useDispatch, useSelector } from "react-redux"
import { Icon } from '@iconify/react';
import { setChangeAddressWindow } from "../../../../features/windows";
import { ReactComponent as LocationSVG } from "../../../../../svgs/12.svg"
import { useState } from "react";
import FiledSet from "./FiledSet";
import { setLocation } from "../../../../features/shoppingCart";

const ChangeAddress = () => {

  const dispatcher = useDispatch()

  const changeAddressState = useSelector(state => state.windows.value.changeAddress.state)
  const address = useSelector(state => state.shoppingCart.value.location)


  function handleOnClose() {
    dispatcher(setChangeAddressWindow('close'))
  }

  function handleOnSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const formDataObj = Object.fromEntries(formData.entries());
    dispatcher(setLocation(formDataObj))
    dispatcher(setChangeAddressWindow('close'))
  }




  if (changeAddressState === 'show') {
    return (
      <div className="change-address-page">
        <form className={`container ${changeAddressState}`} onSubmit={handleOnSubmit}>
          <div className="change-address-svg">
            <LocationSVG />
          </div>
          <div className="change-address-header">
            آدرس هایتان را وارد کنید
          </div>
          <div className="change-address-body">
            <FiledSet svg={'humbleicons:arrow-side-join-main'}
              legend={'آدرس اصلی'} type={'mainAddress'} isNeeded={true} defaultValue={address === undefined ? "" : address.mainAddress} />
            <FiledSet svg={'humbleicons:arrow-main-split-side'}
              legend={'آدرس فرعی'} type={'sideAddress'} isNeeded={false} defaultValue={address === undefined ? "" : address.sideAddress} />
          </div>
          <div className="change-address-buttons">
            <button type="submit" >ثبت</button>
            <button type="button" onClick={() => { dispatcher(setChangeAddressWindow('close')) }}>انصراف</button>
          </div>
          <div className="close" onClick={handleOnClose}>
            <Icon icon="carbon:close-filled" color="black" />
          </div>
        </form>
      </div>
    )
  } else return ''

}

export default ChangeAddress
