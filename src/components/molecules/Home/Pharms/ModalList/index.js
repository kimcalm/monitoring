import React, { useEffect, useState } from "react";

import Modal from "react-modal";
import EffectList from "../../Modals/EffectList";
import InventoryList from "../../Modals/InventoryList";
import RiskToggle from "../../Modals/RiskToggle";

import toggleDeactivate from "../../../../../assets/toggleRight.png"
import toggleActivate from "../../../../../assets/toggleDown.png"


const customStyles = {
    content: {
        top: "50%",
        left: "50%",
        right: "auto",
        bottom: "auto",
        height: "100%",
        width: "70%",
        marginRight: "-50%",
        transform: "translate(-50%, -50%)",
        zIndex: '1000'
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        zIndex: '999'  // Just below the modal content
    }
};

function ModalList(props) {
    const [IsOpen, setIsOpen] = useState(false);

    // Modal을 Open하는 함수
    const openModal = () => {
        setIsOpen(true);
    };

    // Modal을 Close하는 함수
    const closeModal = () => {
        setIsOpen(false);
        props.setData(false)
    };

    // useEffect를 사용하여 props.data가 변경될 때 마다 체크
    useEffect(() => {
        if (props.data === true) {
            openModal();  // props.data가 true일 경우 모달을 엽니다.
        } else {
            closeModal(); // props.data가 true가 아닐 경우 모달을 닫습니다.
        }
    }, [props.data]);  // props.data가 변경될 때마다 이 효과를 실행합니다.


    // 위험도 기준 설명 토글
    const [toggle, setToggle] = useState(false)

    const toggleVisibility = () => {
        setToggle(!toggle);  // Toggle the current state
    };

    return (
        <>
            <div className='flex mt-5'>
                <Modal
                    ariaHideApp={false}
                    isOpen={IsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <button onClick={closeModal}>Close</button>
                    <div className="mt-5">
                        <p className="text-3xl mb-5">영향성 품목 리스트</p>
                        <EffectList />
                    </div>
                    <div className="mt-5">
                        <p className="text-3xl mb-5">재고 현황</p>
                        <InventoryList />
                        <button onClick={toggleVisibility} className="flex items-center">
                            <img src={toggle ? toggleActivate : toggleDeactivate} style={{ width: '12px', height: '12px' }} className="mr-2"/>
                            <div className="my-5">
                                <span>위험도 기준 : </span>
                                <span style={{ color: 'red' }}>고위험</span><span> > </span>
                                <span style={{ color: 'orange' }}>중위험</span><span> > </span>
                                <span style={{ color: 'green' }}>저위험</span><span> > </span>
                                <span style={{ color: 'blue' }}>초저위험</span>
                            </div>
                        </button>
                        {toggle && <RiskToggle />}
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default ModalList;