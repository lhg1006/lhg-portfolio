'use client';
import React, {useState} from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from "@fullcalendar/interaction";
import Modal from 'react-modal';
import fullCalendarCss from "@/public/css/fullCalendar.module.css";
import "@/public/css/modalCss.css"


const MyCalendar = () => {
    const [events, setEvents] = useState([
        // 기존 일정 데이터
        {
            title: '이벤트 1',
            date: '2023-10-18',
            description: '이벤트 설명',
            location: '이벤트 장소'
        },
        {
            title: '이벤트 2',
            date: '2023-10-20',
            description: '다른 이벤트 설명',
            location: '다른 이벤트 장소',
        },
    ]);

    const [showModal, setShowModal] = useState(false);
    const [newEvent, setNewEvent] = useState({ title: '', date: '', description: '', location: '' });

    const handleAddEventClick = (arg) => {
        // FullCalendar에서 날짜를 클릭할 때 호출
        setShowModal(true);
        setNewEvent({ title: '', date: arg.dateStr, description: '', location: '' });
    };

    const handleEventSubmit = () => {
        if (newEvent.title && newEvent.date) {
            setEvents([...events, newEvent]);
            setShowModal(false);
        }
    };

    const eventContent = (arg) => {
        return (
            <div>
                <div className={fullCalendarCss.title}>{arg.event.title}</div>
                <hr/>
                <div className={fullCalendarCss.description}>{arg.event.extendedProps.description}</div>
                <div className={fullCalendarCss.location}>{arg.event.extendedProps.location}</div>
            </div>
        );
    };


    return (
        <div className={fullCalendarCss.fCWrap}>
            <FullCalendar
                plugins={[dayGridPlugin, interactionPlugin]}
                initialView="dayGridMonth"
                events={events}
                dateClick={(arg) => {
                    // 날짜 클릭 시 이벤트 핸들러
                    handleAddEventClick(arg)
                }}
                eventContent={eventContent} // title, description, location을 모두 표시하는 커스텀 함수
            />

            <Modal
                isOpen={showModal}
                onRequestClose={() => setShowModal(false)}
                contentLabel="Add Event Modal"
                className="modal"
                overlayClassName="custom-overlay"
                ariaHideApp={false}
            >
                <h2>새로운 이벤트 추가</h2>
                <input
                    type="text"
                    placeholder="이벤트 제목"
                    value={newEvent.title}
                    onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="이벤트 설명"
                    value={newEvent.description}
                    onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="이벤트 장소"
                    value={newEvent.location}
                    onChange={(e) => setNewEvent({ ...newEvent, location: e.target.value })}
                />
                <button onClick={handleEventSubmit}>추가</button>
                <button onClick={()=>setShowModal(false)} className="react-modal-close-button">
                    닫기
                </button>
            </Modal>
        </div>
    );
};

export default MyCalendar;
