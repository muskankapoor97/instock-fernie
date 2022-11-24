import React from "react";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import less from "../../assets/icons/chevron_right-24px.svg";

const InventoryList = (props) => {
  const items = props.inventory;
  return (
    <form className="invList">
      <section className="invList-top">
        <div className="invList-top-title">
          <h2 className="invList-top-title invList-top-title__text">
            Inventory
          </h2>
        </div>
        <div className="invList-top-form invList-top-search">
          <input
            type="text"
            placeholder="Search..."
            className="invList-top-search__bar"
          />
          <img
            src={searchIcon}
            alt="searchIcon"
            className="invList-top-search__img"
          />
        </div>
        <div className="invList-top-form invList-top-btn">
          <button className="invList-top-btn--blue">+ Add New Item</button>
        </div>
      </section>

      <div className="invList__item">
        <div className="invList__item-bar">
          <div className="invList__item-bar-wrap">
            <span class="invList__item-bar-text">INVENTORY ITEM</span>
            <img class="invList__item-bar-icon" src={sortIcon} alt="" />
          </div>

          <div className="invList__item-bar-wrap">
            <span className="invList__item-bar-text">CATEGORY</span>
            <img class="invList__item-bar-icon" src={sortIcon} alt="" />
          </div>

          <div className="invList__item-bar-wrap status">
            <span className="invList__item-bar-text">STATUS</span>
            <img class="invList__item-bar-icon" src={sortIcon} alt="" />
          </div>

          <div className="invList__item-bar-wrap  quantity">
            <span className="invList__item-bar-text">QTY</span>
            <img class="invList__item-bar-icon" src={sortIcon} alt="" />
          </div>

          <div className="invList__item-bar-wrap  warehouse">
            <span className="invList__item-bar-text">WAREHOUSE</span>
            <img class="invList__item-bar-icon" src={sortIcon} alt="" />
          </div>

          <span className="invList__item-bar-text">ACTIONS</span>
        </div>
        {items &&
          items.map((item) => (
            <div
              className="invList__item-info-Tablet
            "
            >
              <div className="invList__item-info-nameWrap">
                <span className="invList__item-info-name">
                  {item.item_name}
                </span>
                <img
                  className="invList__item-info-image"
                  src={less}
                  alt="arrowRight"
                />
              </div>
              <span className="invList__item-info-category">
                {item.category}
              </span>
              <span className="invList__item-info-status">{item.status}</span>
              <span className="invList__item-info-num">{item.quantity}</span>
              <span className="invList__item-info-warehouse">warehouse</span>
              <div className="invList__item-info-actions">
                <img
                  className="invList__item-info-actions-imge"
                  src={deleteIcon}
                  alt="delete"
                />
                <img
                  className="invList__item-info-actions-imge"
                  src={editIcon}
                  alt="edit"
                />
              </div>
            </div>
          ))}

        <div className="invList__item-info">
          <div className="invList__item-info-wrap">
            <div className="invList__item-info-contanier">
              <span class="invList__item-info-tag">INVENTORY ITEM</span>
              <div className="invList__item-info-nameWrap">
                <span className="invList__item-info-name">Television</span>
                <img
                  className="invList__item-info-image"
                  src={less}
                  alt="arrowRight"
                />
              </div>
            </div>

            <div className="invList__item-info-contanier">
              <span class="invList__item-info-tag">STATUS</span>
              <span className="invList__item-info-status">IN STOCK</span>
            </div>
          </div>

          <div className="invList__item-info-wrap">
            <div className="invList__item-info-contanier">
              <span class="invList__item-info-tag">CATEGORY</span>

              <span className="invList__item-info-category">Electronics</span>
            </div>

            <div className="invList__item-info-contanier">
              <span class="invList__item-info-tag">QTY</span>
              <span className="invList__item-info-num">500</span>
            </div>
          </div>

          <div className="invList__item-info-wrap">
            <div className="invList__item-info-contanier"></div>
            <div className="invList__item-info-contanier">
              <span class="invList__item-info-tag">WAREHOUSE</span>
              <span className="invList__item-info-num">Manhatten</span>
            </div>
          </div>
          <div className="invList__item-info-actions">
            <img
              className="invList__item-info-actions-imge"
              src={deleteIcon}
              alt="delete"
            />
            <img
              className="invList__item-info-actions-imge"
              src={editIcon}
              alt="edit"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default InventoryList;
