/**
 * Created by mitroc on 01.03.17.
 */
import React from 'react'

const HomePostal = () => (
  <div className="form-group">
    <label className="col-md-4 control-label" htmlFor="Kod Pocztowy">Kod Pocztowy</label>
    <div className="col-md-4">
      <input id="Kod Pocztowy" name="Kod Pocztowy" type="text" placeholder="00-000" className="form-control input-md" required="" />
        <span className="help-block">Wpisz swój kod pocztowy</span>
    </div>
  </div>
);

export default HomePostal