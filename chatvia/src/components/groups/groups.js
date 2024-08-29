import React from "react";
import { getRegister } from "../../services/product.service";

class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contact: [],
      groupName: "",
      description: "",
      selectedContacts: [],
      groups: this.loadGroupsFromLocalStorage(), // Load groups from local storage
      searchQuery: "",
    };
  }

  componentDidMount() {
    this.fetchRegisterData();
  }
   
  async fetchRegisterData() {
    try {
      const res = await getRegister();
      this.setState({
        contact: res.data,
      });
    } catch (error) {
      console.error("Error fetching register data:", error);
    }
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleCheckboxChange = (id) => {
    this.setState((prevState) => {
      const selectedContacts = prevState.selectedContacts.includes(id)
        ? prevState.selectedContacts.filter((contactId) => contactId !== id)
        : [...prevState.selectedContacts, id];
      return { selectedContacts };
    });
  };

  createGroup = () => {
    const { groupName, description, selectedContacts, groups } = this.state;
    const newGroup = {
      groupName,
      description,
      members: selectedContacts,
    };
    const updatedGroups = [...groups, newGroup];
    this.setState({
      groups: updatedGroups,
      groupName: "",
      description: "",
      selectedContacts: [],
    });
    this.saveGroupsToLocalStorage(updatedGroups);
  };

  getInitials = (name) => {
    return name.charAt(0).toUpperCase();
  };

  saveGroupsToLocalStorage = (groups) => {
    localStorage.setItem("groups", JSON.stringify(groups));
  };

  loadGroupsFromLocalStorage = () => {
    const groups = localStorage.getItem("groups");
    return groups ? JSON.parse(groups) : [];
  };

  handleSearchChange = (e) => {
    this.setState({ searchQuery: e.target.value });
  };

  render() {
    const { contact, groupName, description, selectedContacts, groups, searchQuery } = this.state;

    // Filter groups based on search query
    const filteredGroups = groups.filter((group) =>
      group.groupName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
      <div  className="m-2 mt-2 bg-light"   style={{position:"absolute",float:"top",top:-7,left:70,width:"370px",padding:"10px",backgroundColor:"#f5f7fb",height:"650px"}}>
        <h5 className="m-3">
          Groups
          <i 
            className="ri-group-line float-end h4"
            style={{ cursor: "pointer" }}
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            aria-hidden="true"
          ></i>
        </h5>

        {/* Modal for creating new group */}
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create New Group
                </h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="mb-3">
                    <label htmlFor="groupName" className="col-form-label">
                      Group Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="groupName"
                      name="groupName"
                      value={groupName}
                      onChange={this.handleInputChange}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="col-form-label">
                      Description:
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={description}
                      onChange={this.handleInputChange}
                    ></textarea>
                  </div>

                  <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <h2 className="accordion-header" id="headingOne">
                        <button
                          className="accordion-button"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Group Members
                        </button>
                      </h2>
                      <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {contact.map((member) => (
                            <div key={member.id} className="form-check">
                              <input
                                type="checkbox"
                                className="form-check-input"
                                id={`member-${member.id}`}
                                checked={selectedContacts.includes(member.id)}
                                onChange={() => this.handleCheckboxChange(member.id)}
                              />
                              <label className="form-check-label" htmlFor={`member-${member.id}`}>
                                {member.userName}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="btn btn-primary" onClick={this.createGroup}>
                  Create Group
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Search box */}
        <div className="mt-4" style={{ display: "flex", justifyContent: "center" }}>
  <div className="search-box chat-search-box" style={{ maxWidth: "350px", width: "100%" }}>
    <div className="input-group input-group-lg" style={{ backgroundColor: "#e6ebf5", borderRadius: "5px" }}>
      <button type="button" className="text-decoration-none text-muted pr-1 btn btn-link" style={{ padding: "0 8px" }}>
        <i className="ri-search-line search-icon font-size-14" style={{ backgroundColor: "#e6ebf5" }}></i>
      </button>
      <input 
        placeholder="Search groups..." 
        type="text" 
        className="form-control" 
        value={searchQuery}
        onChange={this.handleSearchChange}
        style={{ backgroundColor: "#e6ebf5", border: "none", outline: "none", boxShadow: "none", fontSize: "15px" }} 
      />
    </div>
  </div>
</div>

        {/* Displaying created groups */}
        <div className="mt-4">
          <h6>Created Groups:</h6>
          <ul className="mt-4">
            {filteredGroups.map((group, index) => (
              <li key={index} className="list-group-item d-flex align-items-center">
                <h6 className="avatar-circle me-3 m-2">
                  <h6 className="initials">{this.getInitials(group.groupName)}</h6>
                </h6>
              <h6>  {group.groupName}</h6>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ position: "absolute", float: "top", top: -1, left:383,width:"871px" }}>
<div className="row p-1 avi">
  <div className="col-lg-8 col-sm-4 d-flex p-3 mt-2">
  <img src={require("../../assets/images/prof.jpg")} height="35" alt="" className="profile-user rounded-circle" /><span className="ms-2 mt-2" style={{ fontSize: "15px",fontWeight:'bold' }}>Patric Hendricks</span>
  </div>
  <div className="col-lg-4 col-sm-8 p-3">
    <ul style={{display:"flex",flexDirection:'row',listStyle:'none'}}>
      <li>
      <button type="button" aria-haspopup="true" aria-expanded="false" className="btn nav-btn btn btn-none">
                                        <i className="ri-search-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    </button>      </li>
      <button type="button" className="btn nav-btn">
                                    <i className="ri-phone-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                </button>
      <li>
      <button type="button" class="btn btn-none" data-bs-toggle="modal" data-bs-target="#exampleModal">
  <i className="ri-vidicon-line"  style={{fontSize:'20px',color:"#878a92"}}></i>
</button>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <input 
          
             type="text" 
             placeholder="Enter Room Code"></input>
      </div>
      <div class="modal-footer">
      <button >Join</button>
      </div>
    </div>
  </div>
</div>       </li>
       <li>
       <button type="button" className="btn nav-btn">
                                    <i className="ri-user-2-line" style={{fontSize:'20px',color:"#878a92"}}></i>
                                </button>       </li>
       <li>
       <button type="button" aria-haspopup="true" aria-expanded="false" className="btn nav-btn btn btn-none">
                                        <i className="ri-more-fill" style={{fontSize:'20px',color:"#878a92"}}></i>
                                    </button>       </li>
    </ul>
  </div>
</div>
<div className=" mt-3" style={{ width: "871px",height: "430px"}}>

                       
                       
                    
                
</div>
<form style={{width:'871px'}} >
  <div className="row avis p-4">
    <div className="col-lg-8 col-sm-4">
<input type="text" className="form-control form-control-lg bg-light border-light form-control"  placeholder="Enter Message..."></input> 
    </div>
    <input type="hidden" name="sent_by" /> 
    <div className="col-lg-4 col-sm-8">
      <ul style={{listStyle:'none',display:'flex',flexDirection:'row'}}>
        <li>
        
        <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-emotion-happy-line"></i>
                    <input
                        type="text" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                      
                    />
                    
                    
                
               
                 </label> 
        </li>
        <li>
        
     <label id="files" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-attachment-line"></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                    />
                    
                    
                
               
                 </label>
                                        
      </li>
      <li>
        
       
      <label id="images" className="btn btn-link text-decoration-none font-size-16 btn-lg waves-effect">
                    <i className="ri-image-fill"></i>
                    <input
                        type="file" 
                        name="fileInput" 
                        size="60" 
                        style={{ display: 'none' }}  
                    />
                    
                    
                
               
                 </label>
                             
      </li>

      <li>
                                    <button type="submit" className="btn btn-none" style={{ border: "none" }}>
                                        <i className="ri-send-plane-2-fill" style={{ fontSize: "25px", cursor: "pointer", border: "1px solid #7269ef", borderRadius: "4px", color: "white", backgroundColor: "#7269ef", padding: "5px", width: "50px"}}></i>
                                    </button>
                                </li>

      </ul>
    </div>
  </div>

  </form>
                </div>
      </div>
    );
  }
}

export default Groups;
