import React, { useEffect, useRef } from "react";

const Messages = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, []);
  return (
    <div className="messages" ref={containerRef}>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          excepturi nesciunt enim in inventore debitis possimus dolor, et
          perspiciatis eaque deleniti nam quisquam porro alias hic, impedit,
          laborum dicta sequi explicabo ipsa temporibus deserunt amet velit. A,
          qui. Culpa minima voluptatem delectus natus cum earum?
        </div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          excepturi nesciunt enim in inventore debitis possimus dolor, et
          perspiciatis eaque deleniti nam quisquam porro alias hic, impedit,
          laborum dicta sequi explicabo ipsa temporibus deserunt amet velit. A,
          qui. Culpa minima voluptatem delectus natus cum earum?
        </div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          saepe, fugit fugiat, mollitia expedita tempora consequuntur officiis
          et voluptates ut nesciunt quaerat? Nam, iusto dolorum. Doloremque
          voluptates ducimus numquam totam repellendus ea hic aspernatur!
        </div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          saepe, fugit fugiat, mollitia expedita tempora consequuntur officiis
          et voluptates ut nesciunt quaerat? Nam, iusto dolorum. Doloremque
          voluptates ducimus numquam totam repellendus ea hic aspernatur!
        </div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          excepturi nesciunt enim in inventore debitis possimus dolor, et
          perspiciatis eaque deleniti nam quisquam porro alias hic, impedit,
          laborum dicta sequi explicabo ipsa temporibus deserunt amet velit. A,
          qui. Culpa minima voluptatem delectus natus cum earum?
        </div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          saepe, fugit fugiat, mollitia expedita tempora consequuntur officiis
          et voluptates ut nesciunt quaerat? Nam, iusto dolorum. Doloremque
          voluptates ducimus numquam totam repellendus ea hic aspernatur!
        </div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          excepturi nesciunt enim in inventore debitis possimus dolor, et
          perspiciatis eaque deleniti nam quisquam porro alias hic, impedit,
          laborum dicta sequi explicabo ipsa temporibus deserunt amet velit. A,
          qui. Culpa minima voluptatem delectus natus cum earum?
        </div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          saepe, fugit fugiat, mollitia expedita tempora consequuntur officiis
          et voluptates ut nesciunt quaerat? Nam, iusto dolorum. Doloremque
          voluptates ducimus numquam totam repellendus ea hic aspernatur!
        </div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
      <div className="message-text left">
        <div className="left-msg msg">hi how are you?</div>
      </div>{" "}
      <div className="message-text left">
        <div className="left-msg msg">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          saepe, fugit fugiat, mollitia expedita tempora consequuntur officiis
          et voluptates ut nesciunt quaerat? Nam, iusto dolorum. Doloremque
          voluptates ducimus numquam totam repellendus ea hic aspernatur!
        </div>
      </div>
      <div className="message-text right">
        <div className="right-msg msg">i am fine? what about you?</div>
      </div>
    </div>
  );
};

export default Messages;
