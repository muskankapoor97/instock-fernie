import arrow from "../../assets/icons/arrow_back-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import trash from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "./Warehousedetail.scss";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";



const GET_WAREHOUSE_URL = (id) => `http://localhost:8080/warehouses/${id}`;
const GET_INVENTORY_URL = (id) =>
  ` http://localhost:8080/warehouses/${id}/inventories`;


const WarehouseDetails = () => {
const { id } = useParams();
const [warehouseInventory, setWarehouseInventory] = useState([]);
const [warehouse, setWarehouse] = useState([]);
const [inventoryToDelete, setInventoryToDelete] = useState("");
  
  useEffect(() => {
    const fetchData = async () => {
      // get warehouse data by ID from API
      console.log(id);
      const warehouse_data = await axios.get(GET_WAREHOUSE_URL(id));
      const warehouse = warehouse_data.data.warehouseData[0];
      setWarehouse(warehouse);

      // get the warehouseInventory data by warehouse ID from API
      const { data } = await axios.get(GET_INVENTORY_URL(id));
      const inventoryData = data.inventoriesData;
      setWarehouseInventory(inventoryData);
    };
    fetchData();
  }, [id]);

  function showDeleteConfirm(name) {
    document.getElementById("warehouseDelete").style.display = "block";
    setInventoryToDelete(name);
  }


 
  return (
    <>
      <form className="warehouseDetail">
        <div className="warehouseDetail__nameContainer">
          <div className="warehouseDetail__nameContainer-wrapper">
            <img
              className="warehouseDetail__nameContainer-arrow"
              src={arrow}
              alt="arrow"
            />
            <span className="warehouseDetail__nameContainer-name">
              {warehouse.warehouse_name}
            </span>
          </div>
          <Link to={"/warehouse/" + id + "/edit"}>
            <div className="warehouseDetail__nameContainer-edit">
              <svg
                className="warehouseDetail__nameContainer-editImage"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="warehouseDetail__nameContainer-editImage"
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#2E66E6"
                />
              </svg>
              <span className="warehouseDetail__nameContainer-edit-text">
                Edit
              </span>
            </div>
          </Link>
        </div>

        <div className="warehouseDetail__info">
          <div className="warehouseDetail__info-address">
            <span className="warehouseDetail__info-tag">
              WAREHOUSE ADDRESS:
            </span>
            <span className="warehouseDetail__info-text">
              {warehouse.address}
            </span>
          </div>

          <div className="warehouseDetail__info-contanct">
            <div className="warehouseDetail__info-contanct-nameWrap">
              <span className="warehouseDetail__info-tag">CONTACT NAME:</span>
              <span className="warehouseDetail__info-text">
                {warehouse.contact_name}
              </span>
              <span className="warehouseDetail__info-text">
                {warehouse.contact_position}
              </span>
            </div>
            <div className="warehouseDetail__info-contanct-detailWrap">
              <span className="warehouseDetail__info-tag">
                CONTACT INFORMATION:
              </span>
              <span className="warehouseDetail__info-text">
                {warehouse.contact_phone}
              </span>
              <span className="warehouseDetail__info-text">
                {warehouse.contact_email}
              </span>
            </div>
          </div>
        </div>

        <div className="warehouseDetail__item">
          <div className="warehouseDetail__item-bar">
            <div className="warehouseDetail__item-bar-wrap">
              <span class="warehouseDetail__item-bar-text">INVENTORY ITEM</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap">
              <span className="warehouseDetail__item-bar-text">CATEGORY</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap status">
              <span className="warehouseDetail__item-bar-text">STATUS</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap  quantity">
              <span className="warehouseDetail__item-bar-text">QUANTITY</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <span className="warehouseDetail__item-bar-text">ACTIONS</span>
          </div>

          {warehouseInventory.map((inventory) => {
            return (
              <div
                key={inventory.id}
                className="warehouseDetail__item-info-Tablet
            "
              >
                <div className="warehouseDetail__item-info-nameWrap">
                  <span className="warehouseDetail__item-info-name">
                    {inventory.item_name}
                  </span>
                  <Link to={"/inventory/" + inventory.id}>
                    <img
                      className="warehouseDetail__item-info-image"
                      src={arrowRight}
                      alt="arrowRight"
                    />
                  </Link>
                </div>

                <span className="warehouseDetail__item-info-category">
                  {inventory.category}
                </span>

                {inventory.status === "In Stock" && (
                  <div className="warehouseDetail__item-info-status-wrap">
                    <span className="warehouseDetail__item-info-status">
                      In Stock
                    </span>
                  </div>
                )}
                {inventory.status === "Out of Stock" && (
                  <div className="warehouseDetail__item-info-status-wrap">
                    <span className="warehouseDetail__item-info-statusTwo">
                      Out of Stock
                    </span>
                  </div>
                )}

                <span className="warehouseDetail__item-info-num">
                  {inventory.quantity}
                </span>
                <div className="warehouseDetail__item-info-actions">
                  {/* <Link to={"/warehouse/" + id + "/delete"}> */}
                  <img
                    className="warehouseDetail__item-info-actions-imge"
                    src={trash}
                    alt="delete"
                    onClick={() => showDeleteConfirm(inventory.item_name)}
                  />
                  {/* </Link> */}
                  <Link to={"/warehouse/" + id + "/edit"}>
                    <img
                      className="warehouseDetail__item-info-actions-imge"
                      src={edit}
                      alt="edit"
                    />
                  </Link>
                </div>
              </div>
            );
          })}

          {warehouseInventory.map((inventory) => {
            return (
              <div key={inventory.id} className="warehouseDetail__item-info">
                <div className="warehouseDetail__item-info-wrap">
                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">
                      INVENTORY ITEM
                    </span>
                    <div className="warehouseDetail__item-info-nameWrap">
                      <span className="warehouseDetail__item-info-name">
                        {inventory.item_name}
                      </span>
                      <Link to={"/inventory/" + inventory.id}>
                        <img
                          className="warehouseDetail__item-info-image"
                          src={arrowRight}
                          alt="arrowRight"
                        />
                      </Link>
                    </div>
                  </div>

                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">STATUS</span>
                    {inventory.status === "In Stock" && (
                      <span className="warehouseDetail__item-info-status">
                        In Stock
                      </span>
                    )}
                    {inventory.status === "Out of Stock" && (
                      <span className="warehouseDetail__item-info-statusTwo">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <div className="warehouseDetail__item-info-wrap">
                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">CATEGORY</span>

                    <span className="warehouseDetail__item-info-category">
                      {inventory.category}
                    </span>
                  </div>

                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">QTY</span>
                    <span className="warehouseDetail__item-info-num">
                      {inventory.quantity}
                    </span>
                  </div>
                </div>

                <div className="warehouseDetail__item-info-actions">
                  <Link to={"/warehouse/" + id + "/delete"}>
                    <img
                      className="warehouseDetail__item-info-actions-imge"
                      src={trash}
                      alt="delete"
                    />
                  </Link>
                  <Link to={"/warehouse/" + id + "/edit"}>
                    <img
                      className="warehouseDetail__item-info-actions-imge"
                      src={edit}
                      alt="edit"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </form>

      <section className="warehouseDelete" id="warehouseDelete">
        <div className="warehouseDelete__icon-wrapper">
          <img
            className="warehouseDelete__icon"
            src={trash}
            alt="delete-icon"
          />
        </div>

        <div className="warehouseDelete__title-wrapper">
          <h1 className="warehouseDelete__title">
            Delete {inventoryToDelete} inventory?
          </h1>
        </div>
        <div className="warehouseDelete__text-wrapper">
          <p className="warehouseDelete__text">
            Please confirm that you’d like to delete the Washington from the
            list of warehouses. You won’t be able to undo this action.
          </p>
        </div>
        <div className="warehouseDelete__btn-wrapper">
          <button className="warehouseDelete__btn warehouseDelete__btn warehouseDelete__btn--cancel">
            Cancel
          </button>
          <button className="warehouseDelete__btn warehouseDelete__btn--delete">
            Delete
          </button>
        </div>
      </section>
    </>
  );
};

export default WarehouseDetails;
