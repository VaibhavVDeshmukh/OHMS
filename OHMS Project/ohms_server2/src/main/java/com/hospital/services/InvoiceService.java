package com.hospital.services;

import com.hospital.pojo.Invoice;

public interface InvoiceService {

	String addInvoice(Invoice invoice, int aid);

	Invoice findInvoiceDetailsByAppointment(int aid);
	
}
