const InputContractFile=(props) => {
    return (
        <>
            <h6 className="m-0 font-weight-bold text-primary">강의 계약서</h6>
            <input
            type="file"

            onChange={props.onChange}
            name="contract_file" />
        </>
    )
}

export default InputContractFile;