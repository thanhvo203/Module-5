import React, { useEffect, useState } from 'react';
import { deleteSong, getListSong, getSongById, searchSong, updateSong } from '../services/SongService';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

function ListSong() {
    const [songs, setSongs] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit] = useState(2);
    const totalPage = Math.ceil(songs.length / limit);

    const onGetListSong = () => {
        const showList = async () => {
            const data = await getListSong();
            setSongs(data)
        }
        showList();
    }
    const nextPage = () => {
        if (page < totalPage) {
            setPage(page + 1);
        }
    }
    const previosPage = () => {
        if (page > 1) {
          setPage(page - 1);
        }
    }
    const paginationList = (page, limit) => {
        const startIndex = (page-1) * limit;
        const endIndex = startIndex + limit;
        return songs.slice(startIndex, endIndex);
    };
    const paginatedList  =  paginationList(page, limit)
    const handleOnchange = (event) => {
        setSearch(event.target.value);
    }
    const handleSearch = async () => {
        const data = await searchSong(search);
        setSongs(data);
    }


    const handleChangeStateSong = async (id) => {
        const song = await getSongById(id);
        if (song.songState === "Public") {
            Swal.fire({
                icon: "error",
                text: 'Your song was public',
                timer: 1000
            })
        } else {
            Swal.fire({
                icon: 'warning',
                title: 'Thay Đổi Trạng Thái',
                text: "Bạn có muốn công khai bài hát  này không? ",
                showConfirmButton: true,
                showCancelButton: true,
                confirmButtonText: 'Có',
                confirmButtonColor: 'green',
                cancelButtonColor: 'blue',
                cancelButtonText: 'Không'
            }).then((result) => {
                if (result.isConfirmed) {
                    const newState = "Public";
                    const newSong = {
                        ...song,
                        songState: newState,
                    }
                    console.log(newSong)
                    updateSong(newSong).then(() => {
                        Swal.fire({
                            icon: 'success',
                            title: 'Thay Dổi Thành Công',
                            timer: 1000
                        }).then(() => {
                            onGetListSong();
                        })
                    })
                }
            })
        }
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Bạn có chắc muốn xoá?',
            text: 'Hành động này không thể hoàn tác',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Đồng Ý Xoá'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteSong(id).then(() => {
                    Swal.fire({
                        icon: 'success',
                        text: 'Bài hát đã được xoá',
                        title: 'Thành công'
                    }).then(() => {
                        onGetListSong()
                    })
                });
            }
        });
    };
    useEffect(onGetListSong, []);
    return (
        <div>
            <style dangerouslySetInnerHTML={{ __html: "\nbody {\n color: #566787;\n    background: #f5f5f5;\n    font-family: 'Roboto', sans-serif;\n}\n.table-responsive {\n    margin: 30px 0;\n}\n.table-wrapper {\n    min-width: 1000px;\n    background: #fff;\n    padding: 20px;\n    box-shadow: 0 1px 1px rgba(0,0,0,.05);\n}\n.table-title {\n    padding-bottom: 10px;\n    margin: 0 0 10px;\n    min-width: 100%;\n}\n.table-title h2 {\n    margin: 8px 0 0;\n    font-size: 22px;\n}\n.search-box {\n    position: relative;        \n    float: right;\n}\n.search-box input {\n    height: 34px;\n    border-radius: 20px;\n    padding-left: 35px;\n    border-color: #ddd;\n    box-shadow: none;\n}\n.search-box input:focus {\n    border-color: #3FBAE4;\n}\n.search-box i {\n    color: #a0a5b1;\n    position: absolute;\n    font-size: 19px;\n    top: 10px;\n    left: 10px;\n}\ntable.table tr th, table.table tr td {\n    border-color: #e9e9e9;\n}\ntable.table-striped tbody tr:nth-of-type(odd) {\n    background-color: #fcfcfc;\n}\ntable.table-striped.table-hover tbody tr:hover {\n    background: #f5f5f5;\n}\ntable.table th i {\n    font-size: 13px;\n    margin: 0 5px;\n    cursor: pointer;\n}\ntable.table td:last-child {\n    width: 130px;\n}\ntable.table td a {\n    color: #a0a5b1;\n    display: inline-block;\n    margin: 0 5px;\n}\ntable.table td a.view {\n    color: #03A9F4;\n}\ntable.table td a.edit {\n    color: #FFC107;\n}\ntable.table td a.delete {\n    color: #E34724;\n}\ntable.table td i {\n    font-size: 19px;\n}    \n.pagination {\n    float: right;\n    margin: 0 0 5px;\n}\n.pagination li a {\n    border: none;\n    font-size: 95%;\n    width: 30px;\n    height: 30px;\n    color: #999;\n    margin: 0 2px;\n    line-height: 30px;\n    border-radius: 30px !important;\n    text-align: center;\n    padding: 0;\n}\n.pagination li a:hover {\n    color: #666;\n}\t\n.pagination li.active a {\n    background: #03A9F4;\n}\n.pagination li.active a:hover {\n    background: #0397d6;\n}\n.pagination li.disabled i {\n    color: #ccc;\n}\n.pagination li i {\n    font-size: 16px;\n    padding-top: 6px\n}\n.hint-text {\n    float: left;\n    margin-top: 6px;\n    font-size: 95%;\n}\n" }} />
            <h1 style={{ textAlign: 'center' }}></h1>
            <div className="container-fluid">
                <div className="table-responsive">
                    <div style={{ textAlign: 'left' }}>
                        <button style={{ marginBottom: '10px', border: 'none' }}>
                            <Link to={`/create`} className="btn btn-primary" style={{ fontSize: '25px', borderRadius: '30px', color: 'white' }}>Đăng ký</Link>
                        </button>
                    </div>
                    <div className="table-wrapper">
                        <div className="table-title">
                            <div className="row">
                                <div className="col-sm-8"><h2 style={{ textAlign: 'left' }}>Kho nhạc</h2></div>
                                <div className="col-sm-4">
                                    <div className="search-box">
                                        <a onClick={handleSearch} ><i className="material-icons"></i></a>
                                        <input onChange={handleOnchange} type="text" className="form-control" placeholder="Search…" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table className="table table-striped table-hover table-bordered">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Tên bài hát </th>
                                    <th>Tên ca sĩ</th>
                                    <th>Thời gian phát </th>
                                    <th>Số lượng yêu thích</th>
                                    <th>Trạng thái</th>
                                    <th>Chức năng</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedList.map((item) => {
                                    return (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td >{item.name}</td>
                                            <td>{item.singer}</td>
                                            <td>{item.time}</td>
                                            <td>{item.favioste}</td>
                                            <td>{item.songState}</td>
                                            <td style={{ width: '100px' }}>
                                                <button onClick={() => { handleDelete(item.id) }} className='btn btn-danger' style={{ margin: '10px', width: '194px' }}>Xoá</button>
                                            </td>
                                            <td>
                                                <button onClick={() => { handleChangeStateSong(item.id) }} className='btn btn-warning' style={{ margin: '10px', width: '194px' }}>Thay Đổi</button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        <div style={{ margin: '10px' }}>
                            <button className='btn btn-primary' disabled={page <=1} onClick={previosPage} style={{ margin: '10px', borderRadius: '30px' }}>Previos</button>
                            <button className='btn btn-primary' disabled={page === totalPage} onClick={nextPage} style={{ borderRadius: '30px' }}>Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ListSong;