import { useDispatch, useSelector } from "react-redux"
import { Icon } from '@iconify/react';
import { setChangeAddressWindow } from "../../../../features/windows";
import { ReactComponent as LocationSVG } from "../../../../../svgs/12.svg"

const ChangeAddress = () => {

  const dispatcher = useDispatch()

  const changeAddressState = useSelector(state => state.windows.value.changeAddress.state)

  function handleOnClose() {
    dispatcher(setChangeAddressWindow('close'))
  }


  if (changeAddressState === 'show') {
    return (

      <div className="change-address-page">
        <div className={`container ${changeAddressState}`}>
          <div className="change-address-svg">
            <LocationSVG />
          </div>
          <div className="change-address-header">
            آدرس هایتان را وارد کنید
          </div>
          <div className="change-address-body">
            <fieldset>
              <legend><Icon icon="humbleicons:arrow-side-join-main" color="black" />آدرس اصلی</legend>
              <input type="text" />
            </fieldset>
            <fieldset>
              <legend><Icon icon="humbleicons:arrow-main-split-side" color="black" />آدرس فرعی</legend>
              <input type='text' />
              <div className="eye" >
              </div>
            </fieldset>
          </div>

          <div className="close" onClick={handleOnClose}>
            <Icon icon="carbon:close-filled" color="black" />
          </div>
        </div>
      </div>
    )
  } else return ''

}

export default ChangeAddress
